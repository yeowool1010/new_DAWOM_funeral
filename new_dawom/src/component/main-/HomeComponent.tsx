import { MainContainer } from '../../containers'
import Image from 'next/image'

export function HomeComponent() {
  return (
    <MainContainer>
      <div className="relative w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover">
        <Image src="/img/main/visual01.jpg" alt="Description" width={500} height={300} />
      </div>

      <h2 className={`mb-3 text-2xl font-semibold`}>메인페이지</h2>
    </MainContainer>
  )
}
