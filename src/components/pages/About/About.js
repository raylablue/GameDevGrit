import React from "react";
import "./About.scss"
import NavBar from "../../organisms/NavBar/NavBar";
import Footer from "../../organisms/Footer/Footer";
import "../../../styles/theme.scss";

function About() {
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="py-3 p-about__body-text">
                    <h2>About</h2>
                    <p>this is the about page. We're about things and stuff.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci. Orci phasellus egestas tellus rutrum tellus. Ornare arcu odio ut sem nulla pharetra diam sit amet. Enim ut sem viverra aliquet eget. Nam libero justo laoreet sit amet. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Amet facilisis magna etiam tempor orci eu lobortis elementum nibh. Morbi tristique senectus et netus et malesuada fames. Vitae aliquet nec ullamcorper sit amet risus nullam eget. Turpis tincidunt id aliquet risus feugiat in ante. Nulla pharetra diam sit amet nisl. Ornare arcu dui vivamus arcu felis. Scelerisque viverra mauris in aliquam sem. A iaculis at erat pellentesque adipiscing. Maecenas accumsan lacus vel facilisis volutpat est velit. Habitasse platea dictumst quisque sagittis purus sit. Vel pharetra vel turpis nunc.<br/>

                        Gravida quis blandit turpis cursus in hac habitasse platea. Morbi tristique senectus et netus et malesuada fames ac. Id eu nisl nunc mi ipsum faucibus vitae. Velit aliquet sagittis id consectetur purus. Enim praesent elementum facilisis leo vel fringilla. Nulla aliquet enim tortor at auctor urna nunc id. Eu feugiat pretium nibh ipsum consequat nisl. Amet venenatis urna cursus eget nunc scelerisque viverra. Ac feugiat sed lectus vestibulum mattis ullamcorper. Fermentum dui faucibus in ornare quam viverra orci sagittis. Arcu non sodales neque sodales ut etiam sit amet nisl. Convallis tellus id interdum velit laoreet. Lacus laoreet non curabitur gravida. Et netus et malesuada fames ac. Ac tincidunt vitae semper quis lectus nulla at. Donec pretium vulputate sapien nec sagittis. Lobortis feugiat vivamus at augue eget.
</p>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default About;