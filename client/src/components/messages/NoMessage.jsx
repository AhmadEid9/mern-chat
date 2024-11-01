const NoMessage = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="tooltip tooltip-primary">
                <div className="">
                    <div className="chat-bubble chat-bubble-primary">
                        Send a message to start the conversation
                        <br />
                        This conversation is protected by end-to-end encryption
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoMessage