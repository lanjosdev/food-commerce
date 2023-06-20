// import { Skeleton } from '../../Skeleton'

import { Container } from "./styles"

export function SkeletonSnack() {
  return (
    <div className='skeleton-wrapper'>
      <Container>

        <h2>Loading...</h2>
        <div className="img"></div>
        <div className="text"></div>
        <div className="price"></div>

        {/* <Skeleton type='title' />
        <Skeleton type='thumbnail' />
        <Skeleton type='text' />
        <Skeleton type='text' />

        <div>
          <Skeleton type='title' />
          <Skeleton type='image' />
        </div> */}
      </Container>
    </div>
  )
}
