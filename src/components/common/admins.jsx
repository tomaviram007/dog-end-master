import React from 'react'
import { Container,Col,Row,Carousel,Card,Button,Image} from "react-bootstrap";



function Admins() {
  return (
    <div>
        <Carousel>
  <Carousel.Item>
  <Card.Body>
      <Row>
          <Col sm={6}>
            <Image
             variant="top"
             src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
             height="350"
             width="100%" />
          </Col>

          <Col sm={6}>
            <Card style={{ width: '100%', height: '100%' }}>
            <Card.Title>Admin</Card.Title>
            <Card.Text>
                
                      Some quick example text to build on the card title and make up the bulk of
                 the card's content. 
                
             
                 
             
             </Card.Text>
                 <ol>
                     <li>like</li>
                     <li>train</li>
                     <li>speak</li>
                 </ol>
           
             {/* <Button variant="primary">Go somewhere</Button> */}
            </Card>
          </Col>
      </Row>
  </Card.Body>
 
  </Carousel.Item>
  <Carousel.Item>
  <Card.Body>
      <Row>
          <Col sm={6}>
            <Card.Img
             variant="top"
             src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
             height="350"
             width="100%" />
          </Col>

          <Col sm={6}>
            <Card style={{ width: '100%', height: '100%' }}>
            <Card.Title>Admin 2</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                 the card's content.
             </Card.Text>
             {/* <Button variant="primary">Go somewhere</Button> */}
            </Card>
          </Col>
      </Row>
  </Card.Body>
 
  </Carousel.Item>
  <Carousel.Item>
  <Card.Body>
      <Row>
          <Col sm={6}>
            <Card.Img
             variant="top"
             src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
             height="350"
             width="100%" />
          </Col>

          <Col sm={6}>
            <Card style={{width: '100%', height: '100%'}}>
            <Card.Title>Admin 3</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                 the card's content.
             </Card.Text>
             {/* <Button variant="primary">Go somewhere</Button> */}
            </Card>
          </Col>
      </Row>
  </Card.Body>
 
  </Carousel.Item>


</Carousel>
    </div>
  )
}

export default Admins