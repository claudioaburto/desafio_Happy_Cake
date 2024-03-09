import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form>
        <span className='frase_contacto'>Cuéntanos ¿En qué te podemos ayudar?</span>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button>Enviar</button>
    </Form>
  );
}

export default ContactForm;