import PropTypes from "prop-types";
import { Button, Row } from "react-bootstrap";
import "./tag.scss";

function Tag({ types }) {
	const typeClass = `type-${types.name}`;

	return (
		<>
			<Row className="justify-content-center text-center btnStyle">
				<Button className={`mx-3 px-0 btn btn-type-1 ${typeClass}`}>
					{types.name}
				</Button>
			</Row>
		</>
	);
}

Tag.propTypes = {
	types: PropTypes.shape({
		Id_types: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
};

export default Tag;