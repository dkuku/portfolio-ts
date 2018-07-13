import * as React from 'react'
import { Form } from 'semantic-ui-react'

interface IFormState {
    subject: string;
    message: string;
}

export default class ContactForm extends React.Component<{}, IFormState> {
    constructor(props: {}){
        super(props)
        this.state = {subject: '', message: ''};
    }

    public generateLink = (subject: string, message: string) => {
        return "mailto:daniel.kuku@gmail.com?subject=" + subject + "&body=" + message
    }

    public handleChange(e: any) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value } as IFormState)
    }

    public handleSubmit = (): void => {
        window.open(this.generateLink(this.state.subject, this.state.message));
    }

    public render(): JSX.Element {
        const { subject, message }: {subject: string; message: string;}  = this.state

        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input label='Subject' placeholder='Subject' name='subject' value={subject} onChange={this.handleChange} />
                <Form.TextArea label='Message' placeholder='Drop me an email ...' name='message' value={message} onChange={this.handleChange} />
                <Form.Button content='Submit'/>
            </Form>
        )
    }
}

