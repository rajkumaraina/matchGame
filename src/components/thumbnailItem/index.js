import './index.css'

const ThumbnailEachItem = props => {
  const {item, checkItem} = props
  const {id, imageUrl, thumbnailUrl, category} = item
  const ItemClicked = () => {
    checkItem(id)
  }
  return (
    <li className="listItem">
      <button onClick={ItemClicked} type="button" className="eachButton">
        <img src={thumbnailUrl} className="thumbnailImg" alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailEachItem
