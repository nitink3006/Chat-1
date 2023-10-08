import {MultiChatWindow,MultiChatSocket,useMultiChatLogic,}from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'a3090921-04de-4358-a9e3-1fdf4364e201', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}

export default ChatsPage