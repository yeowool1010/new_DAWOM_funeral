import { MainContainer } from '../../containers'
import Image from 'next/image'

export function HomeComponent() {
  return (
    <MainContainer>
      <div className="absolute top-0 w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover">
        <Image src="/img/main/visual01.jpg" alt="Description" layout="responsive" width={1000} height={200} />
      </div>

      <div className="pt-64 text-4xl text-right text-white">
        <p>안녕</p>
      </div>
      <h2 className={`mb-3 text-2xl font-semibold`}>메인페이지</h2>
    </MainContainer>
  )
}
