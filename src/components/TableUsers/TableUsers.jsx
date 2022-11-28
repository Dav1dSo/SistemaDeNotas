import Content from './style'
import { Form } from './style';

const TableUsers = (props) => {
    let contacts = props.data;

        return (
            <Content>
                <h1>Cadastro de Aluno</h1>
                <Form>
                    <input placeholder='Nome: ' type="text" name="NameAluno" id="NameAluno" />

                    <input placeholder='Nota 1: ' type="number" name="Nota1" id="Nota1" />
                    <input placeholder='Nota 2:' type="number" name="Nota2" id="Nota2" />
                    <button>Cadastrar</button>
                </Form>
            </Content>
        );



















        // <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact)=>(
                        <tr key={contact.id}>
                            <td>{contact.id}</td>
                            <td>{contact.name}</td>
                            <td>{contact.age}</td>
                            <td><button onClick={()=>{props.handleDelete(contact.id)}}>Remover</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
    
        // </div>
}

export default TableUsers;