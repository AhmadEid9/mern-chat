import React from 'react'

const Message = () => {
  return (
    <div>
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://avatar.iran.liara.run/public/boy" />
                </div>
            </div>
            <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
            <div className="chat-footer opacity-50">11:56</div>
        </div>
    </div>
  )
}

export default Message