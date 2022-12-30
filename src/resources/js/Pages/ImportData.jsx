import { Fragment, useState } from "react";
import { Button, Card, Modal, Form } from "react-bootstrap";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { useForm } from "@inertiajs/inertia-react";

function ImportData ()
{
    const {data, setData, errors, post} = useForm();
    const [show, setShow]   = useState(false);
    const handleClose       = () => setShow(false);
    const handleShow        = () => setShow(true);
    const [files, setFiles] = useState([]);
    const handleAdd         = (newFiles) => {
        newFiles = newFiles.filter(
            (file) => !files.find((f) => f.data === file.data)
        );
        setFiles([...files, ...newFiles]);
        setData('file', files);
    }
    const handleDelete      = (deleted) => {
        setFiles(files.filter((f) => f !== deleted));
    }

    const submitData = () => {
        console.log(data);
        post('/upload-dados');
    }

    return (
        <Fragment>
            <div className="page-header">
                <div>
                    <h2 className="main-content-title tx-24 mg-b-5">Importação de dados</h2>
                </div>
            </div>

            <div className="row row-sm">
                <div className="col-lg-4 col-xxl-3">
                    <Card className="custom-card">
                        <div className="card-body text-center">
                            <Button className="btn ripple btn-primary btn-block" onClick={handleShow}>
                                Importar arquivo de dados
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Adicionar arquivo de dados</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <DropzoneAreaBase 
                                        fileObjects={files}
                                        filesLimit={1}
                                        acceptedFiles={['.xls, .xlsx, application/vnd.ms-excel']}
                                        showFileNames={true}
                                        showFileNamesInPreview={true}
                                        dropzoneText={"Arraste o arquivo ou clique aqui!"}
                                        getFileLimitExceedMessage={(filesLimit) => 'Só é possível adicionar um arquivo por cada importação!'}
                                        getFileAddedMessage={(fileName) => 'O arquivo foi adicionado para importação com sucesso!'}
                                        onAdd={handleAdd}
                                        onDelete={handleDelete} 
                                    />
                                </Modal.Body>

                                <Modal.Footer>
                                    <label className="custom-switch">
                                        <Form.Check
                                            type="switch"
                                            name="import-catalogo"
                                            label="Ligue para importar um catálogo"
                                        />

                                        <span className="custom-switch-description"></span>
                                    </label>

                                    <Button variant="secondary" onClick={submitData}>Adicionar</Button>
                                    <Button variant="primary" onClick={handleClose}>Cancelar</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </Card>
                </div>
            </div>
        </Fragment>
    );
}

export default ImportData;