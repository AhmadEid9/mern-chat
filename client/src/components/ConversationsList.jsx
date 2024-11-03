import Conversation from './Conversation'
import useGetConversations from '../hooks/useGetConversations'
import { getRandomEmoji } from '../utils/emijos'
const ConversationsList = () => {
  const {loading, conversations} = useGetConversations()
  return (
    <div className='overflow-auto'>
      {!loading ?
      conversations.map((conversation, idx) => <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()} lastIdx={idx === conversations.length - 1}/>)
      :
      <div className="rounded-full">
        <span className='loading loading-spinner mx-auto'/>
      </div>
      }
    </div>
  )
}

export default ConversationsList