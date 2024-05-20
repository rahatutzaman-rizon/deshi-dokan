import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <div>
            <h2>this is about</h2>
            <Link href="/about2">this page!</Link>
        </div>
    );
};

export default About;