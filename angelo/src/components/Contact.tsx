const Contact = () => (
    <section className="my-12 text-center h-96" style={{backgroundColor: '#04000E'}}>
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <p className="text-lg text-white mt-4">
            I&apos;m currently looking for a job offer as a software engineer.
        </p>
        <a href="mailto:Gabrielange883@gmail.com" className="text-lg mt-8 text-purple-700 font-bold">Gabrielange883@gmail.com</a>
        <div className="flex justify-center mt-6 space-x-4">
            <a href="#" className="text-white"><img src="iconesSocialMedias/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#" className="text-white"><img src="iconesSocialMedias/github.svg" alt="GitHub" className="w-6 h-6" /></a>
            <a href="#" className="text-white"><img src="iconesSocialMedias/gmail.svg" alt="Gmail" className="w-6 h-6" /></a>
        </div>
    </section>
);

export default Contact;
