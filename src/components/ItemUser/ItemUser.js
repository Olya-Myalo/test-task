import { useParams } from 'react-router-dom'
import * as S from './ItemUser.styled'
import { useEffect, useState } from 'react'

export function ItemUser() {
  const { UserId } = useParams()
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://api.github.com/search/users?q=Q')
        const data = await response.json()
        setUsers(data.items)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  
  const currentUser = users.find((user) => Number(user.id) === Number(UserId))
  console.log(users)

  if (!currentUser) {
    return <div>Loading...</div>
  }

  return (
    <S.Main>
      <S.MainAvatar src={currentUser.avatar_url} alt="avatar" />
      <S.MainBlock>
        <S.MainLogin>Имя пользователя: {currentUser.login}</S.MainLogin>
        <S.MainH3>Увидеть больше...</S.MainH3>
        <S.MainBlockA href={currentUser.html_url}>
          Перейти на страницу пользователя
        </S.MainBlockA>
      </S.MainBlock>
    </S.Main>
  )
}

export default ItemUser
