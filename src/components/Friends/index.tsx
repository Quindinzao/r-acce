// External libraries
import React from 'react'

// Services
import data from '../../services/data.json'

// Assets
import UserPicture from '../../assets/images/user_picture.svg'

// Styled
import { FriendName, FriendsList, ItemFriend } from './styles'

const Friends: React.FC = () => {
  return (
    <FriendsList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item: { id: number }) => item.id}
      data={data.users[0].friends}
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
