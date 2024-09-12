import { Form, Button } from 'react-bootstrap'
import { useRef, useCallback } from 'react'
import useControlledInput from '../../hooks/controlledInput'; //CUSTOM HOOK!

const { Group, Control, Label } = Form

//These 4 parameters have been chosen deliberately so that this Form Component can be reused in a variety of situations
export default function MovieForm({ id, route, initialValues = {}, method = "POST", setSearchResult=()=>{} }) {

    const form = useRef(null)
    let [titleProps, resetTitle] = useControlledInput(initialValues.title || '');
    let [yearProps, resetYear] = useControlledInput(initialValues.year || '');
    let [descriptionProps, resetDescription] = useControlledInput(initialValues.description || '');

    const submitHandler = useCallback((e) => {
        e.preventDefault();
        let options = null;
        if (method === "POST" || method === "PUT") {
            options = {
                method,
                headers: new Headers({ 'Content-Type': 'application/json' }),
                body: JSON.stringify({
                    title: titleProps.value,
                    year: yearProps.value,
                    description: descriptionProps.value,
                })
            }
        }
        fetch(route, options)
        .then(r => {
            if (r.ok) return r.json()
            else return Promise.all([r.json(), r.status])
        })
        .then(r => {
            if (Array.isArray(r)) {
                // indicates an error occurred 
                throw new Error(`Error Occurred on Form Submission:\nStatus: ${r[1]}\nMessage: ${r[0].data}`)
            }
            else {
                setSearchResult(r.data)
            }
        })
        .catch(e => console.log(e))
        .then(() => {
            resetTitle();
            resetYear();
            resetDescription();
        })
}, [titleProps.value, yearProps.value, descriptionProps.value, resetTitle, resetYear, resetDescription, method, route, setSearchResult])

return (
    <Form ref={form} method="POST" id={id} className="" onSubmit={submitHandler}>
        <Group controlId='title' className="mb-3">
            <Label className="fs-4" style={{ color: 'var(--light)' }}>
                <i className="spark fa fa-scroll me-3"></i>
                <span>Title</span>
            </Label>
            <Control type="text" name="title" placeholder="Title of Movie" {...titleProps}></Control>
        </Group>
        <Group controlId='year' className="mb-3">
            <Label className="fs-4" style={{ color: 'var(--light)' }}>
                <i className="spark fa fa-trophy me-3"></i>
                <span>Year</span>
            </Label>
            <Control type="text" name="year" placeholder="Year for Best Picture" {...yearProps}></Control>
        </Group>
        <Group controlId='description' className="mb-3">
            <Label className="fs-4" style={{ color: 'var(--light)' }}>
                <i className="spark fa fa-circle-question me-3"></i>
                <span>Description</span>
            </Label>
            {/* Note, this input only disabled in event there is no initialValue provided. Not ready to search with it, but want to be able to reuse this form with editing, where I will need it */}
            <Control type="text" name="description" disabled={initialValues.description ? false : true} placeholder="Searching by description not yet available" {...descriptionProps}></Control>
        </Group>
        <div className="d-flex justify-content-center mt-3">
            <Button className="fs-4" type="submit" variant="outline-primary">Submit</Button>
        </div>
    </Form>
)
}