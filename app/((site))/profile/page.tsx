const Profile = () => {

  return (
    <div>
      <h1>My Profile</h1>
      <form action='/auth/signout' method="post">
        <button>Sign out</button>
      </form>
    </div>
  )
}

export default Profile
