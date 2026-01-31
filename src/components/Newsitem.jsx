// import default from '../assets/default.jepg'
import default_pic from '..//assets/default_pic.jpg'; 
import Loading from './Loading.jsx'
function Newsitem({ title, description, imageUrl, newsUrl,load }) {
 
	const default_pic = "https://static.vecteezy.com/system/resources/thumbnails/037/534/198/small/online-report-creative-icon-design-vector.jpg"
	
	 	const handleImageError = (e) => {
	 	e.currentTarget.onerror = null; // Prevents infinite loops
	    e.currentTarget.src = default_pic;  // Replaces broken URL with your photo
  		}





  return (

    <div className="col-md-4 my-3">
      <div className="card h-100 shadow-sm">

     
		 {load ? (
		  <Loading />
		) : (
		  <>
		    <img
		      src={imageUrl}
		      className="card-img-top"
		      // alt={title}
		      onError={handleImageError}
		      style={{ height: "200px", objectFit: "cover" }}
		    />

		    <div className="card-body">
		      <h5 className="card-title">{title}</h5>
		      <p className="card-text">{description}</p>

		      <a
		        href={newsUrl}
		        target="_blank"
		        rel="noreferrer"
		        className="btn btn-primary"
		      >
		        Read More
		      </a>
		    </div>
		  </>
		)}


      	
		</div>
		</div>


  );
}

export default Newsitem;
