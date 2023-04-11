import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileHeader from './ProfileHeader/ProfileHeader';



const Profile = (props) => {
    return (
        <div>          
            <ProfileHeader profile = {props.profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;