
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <img 
              src="/lovable-uploads/7737980a-d540-439e-aeb0-baa810486434.png" 
              alt="Technovere" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 font-inter leading-relaxed mb-4">
              Building premium websites that position you as an expert, build trust, and drive leads.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-techno-blue to-techno-yellow rounded-full flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 font-inter text-gray-400">
              <li>Web Development</li>
              <li>App Development</li>
              <li>Shopify Development</li>
              <li>Website Maintenance</li>
              <li>Website Redesign</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sora font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 font-inter text-gray-400">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2024 Technovere. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
