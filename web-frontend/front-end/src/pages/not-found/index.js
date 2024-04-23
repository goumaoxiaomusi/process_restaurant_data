import './index.css'

// Any url path that does not end with /result will be treat as 404 page
const NotFound = () => {
    return (<div class="fourOFour">
    <span class="container">
      404
    </span>
    <div class="page-not-found">
      Page not found
    </div>
    <div class="oops-the-page-you-looking-for-does-not-exist">
      Oops!, the page you looking for does not exist
    </div>
    <div class="container2">
    </div>
  </div>)
}

export default NotFound