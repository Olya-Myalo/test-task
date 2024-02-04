import * as S from './UserSearch.styled'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetUserQuery } from '../../api'

export function UserSearch() {
  const [users, setUsers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const [order, setOrder] = useState('')
  const [page, setPage] = useState(1)
  const { data, error } = useGetUserQuery(
    { userName: searchTerm, order, page },
    { skip: !searchTerm }
  )
  console.log(data)

  if (error) {
    console.log({ error })
  }

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/search/users?q=Q')
        const data = await response.json()
        setUsers(data.items)
        setFilteredUsers(data.items)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    const { value } = e.target.elements.search
    setSearchTerm(value)
    filterUsers()
  }

  const filterUsers = () => {
    if (searchTerm === '') {
      setFilteredUsers(users)
    } else {
      const filtered = users.filter((user) => {
        return user.login.toLowerCase().includes(searchTerm.toLowerCase())
      })
      setFilteredUsers(filtered)
    }
  }

  const sortUsersAsc = () => {
    const sorted = [...filteredUsers].sort(
      (a, b) => a.public_repos - b.public_repos
    )
    setFilteredUsers(sorted)
  }

  const sortUsersDesc = () => {
    const sorted = [...filteredUsers].sort(
      (a, b) => b.public_repos - a.public_repos
    )
    setFilteredUsers(sorted)
  }

  const handleSortAsc = () => {
    setPage(1)
    setOrder('asc')
    sortUsersAsc()
  }

  const handleSortDesc = () => {
    setPage(1)
    setOrder('desc')
    sortUsersDesc()
  }

  return (
    <S.Main>
      <S.MainSearch>
        <S.SearchForm onSubmit={handleSearch}>
          <S.SearchText
            type="search"
            placeholder="Поиск по логину"
            name="search"
          />
          <S.SearchBtn type="submit">Найти</S.SearchBtn>
        </S.SearchForm>
        <S.Filter>
          <S.FilterTitle>Cортировка по количеству репозиториев:</S.FilterTitle>
          <S.FilterButtons>
            <S.Activ onClick={handleSortAsc}>по возрастанию</S.Activ>
            <S.Activ onClick={handleSortDesc}>по убыванию</S.Activ>
          </S.FilterButtons>
        </S.Filter>
      </S.MainSearch>
      <S.MainH1>Пользователи GitHub</S.MainH1>
      <S.Content>
        {filteredUsers &&
          filteredUsers.map((user) => (
            <li key={user.id}>
              <Link to={`/${user.id}`}>
                <S.ImgUser src={user.avatar_url} alt={user.login} />
                {user.login}
              </Link>
            </li>
          ))}
      </S.Content>
    </S.Main>
  )
}

export default UserSearch
