// External libraries
import React, { useContext } from 'react'

// Context
import { AuthContext } from '../../contexts/Auth'

// Services
import data from '../../services/data.json'

// Assets
import UserPicture from '../../assets/images/user_picture.svg'

// Styled
import { FriendName, FriendsList, ItemFriend } from './styles'

const Friends: React.FC = () => {
  const dataContext = useContext(AuthContext)
  const dataUser = data.users.find(value => {
    if (value.email === dataContext.authData?.email) {
      return value
    }
  })

  return (
    <FriendsList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: { id: number }) => item.id}
      data={dataUser?.friends}
      renderItem={(friendName: any) => {
        return (
          <ItemFriend>
            <UserPicture width={57.25} height={57.25} />
            <FriendName>{friendName.item.name}</FriendName>
          </ItemFriend>
        )
      }}
    />
  )
}

export default Friends
