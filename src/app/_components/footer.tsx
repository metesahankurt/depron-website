import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Depron
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
<<<<<<< HEAD
            <a
              href="posts/dynamic-routing"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Ekibimiz
            </a>
            <a
              href={`https://www.youtube.com/@ROSAT-qr5gc`}
              className="mx-3 font-bold hover:underline"
            >
              Youtube
=======
            <a href="https://docs.google.com/document/d/e/2PACX-1vSJ741tvzxFxFTAzbfliD1z-XzPiTVCurePjkyFRR9kGk5uaApBLTB6ILW9vepbqDCjH3i2WSf1g-vo/pub" className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0">
              MİSYONUMUZ VE VİZYONUMUZ
            </a>
            <a
              href={`https://www.instagram.com/robotech_rosat?igsh=MWNpNXNqbmE4M3FjMg==${EXAMPLE_PATHs}`}
              className="mx-3 font-bold hover:underline"
            >
             instagram
>>>>>>> 985a384c5a6c232cdc647c8f39f7c89f8fe0345c
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;