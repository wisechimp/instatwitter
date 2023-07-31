import { BiHomeCircle, BiUser } from 'react-icons/bi'
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs'
import { HiOutlineHashtag } from 'react-icons/hi'

const navigationMenuData = [
  {
    title: "InstaTwit",
    icon: BsTwitter
  },
  {
    title: 'Home',
    icon: BiHomeCircle
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag
  },
  {
    title: 'Notifications',
    icon: BsBell
  },
  {
    title: 'Messages',
    icon: BsEnvelope
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser
  }
]

export default navigationMenuData