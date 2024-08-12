import PropTypes from "prop-types";
import { Button, Row } from "react-bootstrap";
import "./tag.scss";

function Tag({ types, onClick, isActive }) {
	const typeClass = `type-${types.Id_types}`;
	const activeClass = isActive ? 'btn-active' : '';

	return (
		<>
			<Row className="justify-content-center text-center btnStyle">
				<Button className={`mx-3 px-0 text-black ${typeClass} ${activeClass}`}
				onClick={onClick}>{types.name}</Button>
			</Row>
		</>
	);
}

Tag.propTypes = {
	types: PropTypes.shape({
		Id_types: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
	}).isRequired,
	onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Tag;
