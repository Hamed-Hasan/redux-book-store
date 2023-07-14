import { BsRocketTakeoff,BsFingerprint } from 'react-icons/bs';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';

const Faciliteis = () => {
  return (
    <section className="relative pt-12 bg-blueGray-50">
    <div className="items-center flex flex-wrap">
      <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
        <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"/>
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div className="md:pr-12">
          <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
            <BsRocketTakeoff/>
          </div>
          <h3 className="text-3xl font-semibold">A growing company</h3>
          <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            The extension comes with three pre-built pages to help you get
            started faster. You can change the text and images and you're
            good to go.
          </p>
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                  <BsFingerprint />
                  </span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">
                    Carefully crafted components
                  </h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <AiOutlineHtml5/>
                  </span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">Amazing page examples</h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <BiPaperPlane/>
                  </span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">Dynamic components</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Faciliteis;
