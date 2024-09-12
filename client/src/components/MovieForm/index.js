import Card from '../Card'
import { Form, Button } from 'react-bootstrap'
import { useMemo, useRef, useCallback } from 'react'
import useControlledInput from '../../hooks/controlledInput';

const { Group, Control, Label } = Form

export default function MovieForm() {

    const form = useRef(null)
    let [titleProps, resetTitle] = useControlledInput('');
    let [yearProps, resetYear] = useControlledInput('');
    let [descriptionProps, resetDescription] = useControlledInput('');

    const submitHandler = useCallback((e) => {
        e.preventDefault(); 
        console.log(titleProps.value, yearProps.value, descriptionProps.value)
        resetTitle();
        resetYear();
        resetDescription();
    }, [titleProps.value, yearProps.value, descriptionProps.value, resetTitle, resetYear, resetDescription])

    const props2pass = useMemo(() => {
        return {
            header: "Search Terms",
            footer: <span>Scroll Down to View All</span>,
            classes: 'mb-5 movieForm'
        }
    }, [])

    return (
        <Card {...props2pass}>
            <Form ref={form} method="POST" id='searchForm' className="" onSubmit={submitHandler}>
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
                    <Control type="text" name="description" placeholder="Description of film" {...descriptionProps}></Control>
                </Group>
                <div className="d-flex justify-content-center mt-3">
                    <Button className="fs-4" type="submit" variant="outline-primary">Submit</Button>
                </div>
            </Form>
        </Card>
    )
}