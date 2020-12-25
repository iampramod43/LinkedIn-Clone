import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {

    const user = useSelector(selectUser);
    const [input, setInput] = useState('');

    const [posts, setPosts] = useState([]);

    const sendPost = e => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        });
    }, []);

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={YouTubeIcon} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventAvailableIcon} title="Goal" color="#CEA2CC" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#F5987E" />
                </div>
            </div>
            <FlipMove >

            {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post key={id} name={name} description={description} 
                message={message} photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
            {/* <Post name="Pramod Ukkali" description="jhsj" photoUrl="" message="this works" /> */}
        </div>
    )
}

export default Feed
