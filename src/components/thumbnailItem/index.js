import './index.css'

const ThumbnailEachItem = props => {
  const {item, checkItem} = props
  const {id, imageUrl, thumbnailUrl, category} = item
  const ItemClicked = () => {
    checkItem(id)
  }
  return (
    <li className="listItem">
      <img
        src={thumbnailUrl}
        className="thumbnailImg"
        alt="thumbnail"
        onClick={ItemClicked}
      />
    </li>
  )
}
export default ThumbnailEachItem
