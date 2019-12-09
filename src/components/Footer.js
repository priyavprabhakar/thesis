import React from "react"
import '../styles/Footer.css'
import { Modal } from "semantic-ui-react";
import { RESOURCES } from "../utilities/resources";



function Footer() {
    return  <footer className = "footerContainer" > 
        <Modal trigger={<div className="footerText">about</div>}>
            <Modal.Header>About</Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    <p>
                    Dekh Rahe is an interactive archival timeline created by Priya Prabhakar as part of her senior capstone thesis for Media Studies at the Claremont Colleges in Claremont, California. 
                    Dekh Rahe seeks to show how the fascist expansion of surveillance regimes occurs in multifaceted ways and deeply harms the lives of the most marginalized. It is created as a timeline to show that 
                    surveillance is not a one-time phenomenon, it is a growing process. Surveillance regimes, instituted by the brutal colonialist regime, are being continued by the current ethnonationalist rule — 
                    the surveillance state aids, expands, and bolsters Hindutva and upholds caste purity. In order to understand the surveillance regimes of India, it’s important that we work through an 
                    Ambedkarite feminist anti-capitalist lens.
                    <br/>
                    <br/>
                    Prabhakar created Dekh Rahe to contribute to a growing underground cultural, artistic, and philosophical digital movement that fights back against capitalist and hegemonic media. 
                    By creating an interactive archival timeline, Prabhakar hopes to offer an accessible mode of education and awareness to visually showcase the invisible, but deeply material 
                    conditions around us. She is deeply indebted to Dalit-Bahujan and Black feminist thinkers who inspired her to think critically about the systems of domination we live under — 
                    caste apartheid, white supremacy, capitalism, patriarchy, imperialism, heterosexism, etc. -- and constantly fight back against them. 
                    <br/>
                    <br/>
                    Prabhakar believes in the power of popular education, and would like to continually learn the insights of her audience to improve her digital timeline. 
                    If you have any questions, comments, insights, or anything else under the sun, please email priyaprabhakar32@gmail.com. 
                    Prabhakar is also active on Twitter @priyavprabhakar. Prabhakar’s other work is accessible at www.priyaprabhakar.com. Prabhakar’s web design code 
                    can be found open-source on Github, at https://github.com/priyavprabhakar/thesis. 
                    <br/>
                    <br/>
                    </p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
        <Modal trigger={<div className="footerText">resources</div>}>
            <Modal.Header>Resources</Modal.Header>
            <Modal.Content scrolling>
                <Modal.Description>
                    {
                        RESOURCES.map((r, index) => <p key={`resource_${index}`} className="resource">
                            {r}
                        </p>)
                    }
                </Modal.Description>
            </Modal.Content>
        </Modal>


        </footer>
}

export default Footer
