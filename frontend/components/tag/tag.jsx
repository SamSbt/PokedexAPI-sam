import PropTypes from "prop-types";

import { Button, Row } from "react-bootstrap";
import "./tag.scss";

function Tag(props) {
	const { types } = props;

	return (
		<>
			<Row className="btn-style justify-content-center">
				<Button variant="secondary" className="mx-3">
					{types.name}
				</Button>
			</Row>
		</>
	);
}

Tag.propTypes = {
	types: PropTypes.shape({
		Id_types: PropTypes.number.isRequired,
		name: PropTypes.string,
	}),
};

export default Tag;