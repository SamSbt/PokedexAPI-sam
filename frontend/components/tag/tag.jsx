import { Button, Row } from "react-bootstrap";
import "./tag.scss";

function Tag(props) {
	// const [
	// 	,
	// ] = props;

	return (
		<>
			<Row className="btn-style justify-content-center">
				<Button variant="secondary" className="mx-3">
					Btn
				</Button>
			</Row>
		</>
	);
}

export default Tag;
