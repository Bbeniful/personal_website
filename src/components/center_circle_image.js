import MyProfileImage from '../assets/profile_image.jpg'

function CenterImage(){
    return (
        <div> 
            <img src={MyProfileImage} alt='my profile image' id='my_profile_image'/>
        </div>
    )
}

export default CenterImage;