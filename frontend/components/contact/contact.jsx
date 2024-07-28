import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

function Contact({ show, handleClose }) {

	return (
		<>
			<Modal show={show} onHide={handleClose} data-bs-theme="dark" id="myModal">
				<Modal.Header closeButton>
					<Modal.Title>Contactez-nous</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="inputFullname">
							<Form.Label>Nom complet</Form.Label>
							<Form.Control type="text" placeholder="John Smith" autoFocus />
						</Form.Group>
						<Form.Group className="mb-3" controlId="InputEmail">
							<Form.Label>Adresse Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="nom@exemple.com"
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="textarea1"
						>
							<Form.Label>Votre message</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="Écrivez ici..."
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Envoyer
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default Contact;
