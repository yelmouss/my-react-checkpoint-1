import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";

function App() {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
    <Card style={{ width: "18rem" }}>
        <Image />
        <Card.Body>
          <Card.Title>
            <Name />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">
            <Price />
          </Button>
        </Card.Body>
      </Card>
    </div>
      
    </>
  );
}

export default App;
