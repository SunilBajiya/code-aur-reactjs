import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

const slideImage = [
    {
        url: 'https://img.freepik.com/free-photo/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand_335224-1356.jpg?w=740&t=st=1704126764~exp=1704127364~hmac=3350e64eca244fceb7fec6a22fb07baeb6a56a7f536389b57a0456df4669bc22',
        caption :'Begin your journey in Jaipur, known for its stunning architecture and bustling bazaars. The iconic Hawa Mahal (Palace of Winds) and Amber Fort are must-visit attractions. ',
        heading: 'Jaipur, the Pink City',
        paragraph: 'Discover the beauty of Udaipur with its serene lakes, stunning palaces, and rich history. Explore the City Palace and enjoy the tranquility of Fateh Sagar Lake.',
    },
    {
        url: 'https://img.freepik.com/free-photo/rest-sunshine-atoll-bungalow-holiday_1232-3876.jpg?w=740&t=st=1704126810~exp=1704127410~hmac=bcd4b7242b91861ce55a9dab884190e482fc1e5656aceb095f97becffdc5d739',
        
        caption :'Jaisalmer, known as the Golden City due to its yellow sandstone buildings, is home to the magnificent Jaisalmer Fort and intricate Jain temples.',
        heading: 'Jaisalmer, known as the Golden City.',
        paragraph: 'Discover the beauty of Jaisalmer with its serene lakes, stunning palaces, and rich history. Explore the City Palace and enjoy the tranquility of Fateh Sagar Lake.',
    },
    {
        url: 'https://img.freepik.com/premium-photo/boat-floating-fishing-village-ha-long-bay-vietnam-asia_250132-6860.jpg?w=740',
        caption: 'The City Palace and Fateh Sagar Lake are highlights.',
        heading: 'Rajasthan, the Land of Kings, is a treasure trove of history. ',
        paragraph: 'Discover the beauty of Rajasthan with its serene lakes, stunning palaces, and rich history. Explore the City Palace and enjoy the tranquility of Fateh Sagar Lake.',  
      }
   ];
const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
    backgroundAttachment: 'fixed',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  }
  const commonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    width: '80%',
    fontWeight: '900',
    overflow: 'hidden',
  };
  
  const spanStyle = {
    ...commonStyle,
    fontSize: '50px',
    lineHeight: '1px',
    wordSpacing: '1.2px',
    marginTop: '20px',
    color: '#fff',

  };
  
  const spanStyle2 = {
    ...commonStyle,
    marginTop: '50px',
    fontWeight: '900px',

  };
  
  const spanStyle3 = {
    ...commonStyle,
    marginTop: '5%',
  }
  function Slider1() {
    return (
      <div className='slide-container'>
        <Fade  arrow={false} indicators={true} autoplay={true}
        >
          {slideImage.map((image, index) => (
            <div key={index}>
<div style={{ ...divStyle, backgroundImage: `url(${image.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span style={{spanStyle}}>{image.heading}</span>
                <span style={spanStyle2}>{image.caption}</span>
                <span style={spanStyle3}>{image.paragraph}</span>

               
                
              </div>
            </div>
          ))}
        </Fade>
      </div>
    )
  }
  
  export default Slider1;
  