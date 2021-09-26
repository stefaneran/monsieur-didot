import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

const mockImagesList = [
  "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/f29f49dc-7999-48d9-8a5a-da4bcde126ef.jpg",
  "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/154c3d97-c97d-4ac2-9b23-6cd456674a6a.jpg",
  "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/88b7652a-dfd4-4f77-97db-bb8a16efce42.jpg",
  "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/3d788c77-4f76-486b-9f27-b328d9cac3fc.jpg",
  "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/590698cf-f430-4b8f-b496-cce90a2a5c86.jpg",
  "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/b1363b78-4a74-46ef-9e14-6c8d748c4d4f.jpg",
  "https://plumguide-staging.freetls.fastly.net/listings/2591/hero/7902ae75-4c56-4bd4-a4b8-06360f48e23b.jpg"
]

const setup = (width, limit) => {
  render(
    <Carousel 
      height={460}
      width={width}
      limit={limit}
      imagesList={mockImagesList}
    />
  );
}

const moveForward = () => {
  const forwardButton = screen.getAllByRole('button')[1];
  fireEvent.click(forwardButton);
}

const moveBackward = () => {
  const backButton = screen.getAllByRole('button')[0];
  fireEvent.click(backButton);
}

describe('Carousel', () => {

  it('Moves forward succesfully', () => {
    const width = 820;
    const limit = 7;
    setup(width, limit);
    const firstImage = screen.getByTestId('carouselFirstImage')
    // Given I see the first image
    expect(firstImage).toHaveStyle(`margin-left: -0px`)
    // When I move forward
    moveForward();
    // Then I should see the second image
    expect(firstImage).toHaveStyle(`margin-left: -${width}px`)
  })

  it('Moves backward succesfully', () => {
    const width = 820;
    const limit = 7;
    setup(width, limit);
    const firstImage = screen.getByTestId('carouselFirstImage')
    // Given I see the first image
    expect(firstImage).toHaveStyle(`margin-left: -0px`)
    // When I move forward
    moveForward();
    // Then I should see the second image
    expect(firstImage).toHaveStyle(`margin-left: -${width}px`)
    // When I move backward
    moveBackward();
    // Then I should see the first image
    expect(firstImage).toHaveStyle(`margin-left: -0px`)
  })

  it('Updates the counter properly', () => {
    const width = 820;
    const limit = 7;
    // Given the page is rendered
    setup(width, limit);
    // Then I should see "1/7"
    let counter = screen.getByText('1/7');
    expect(counter).toBeTruthy();
    // When I move forward
    moveForward();
    // Then I should see "2/7"
    counter = screen.getByText('2/7');
    expect(counter).toBeTruthy();
    // When I move forward
    moveForward();
    // Then I should see "3/7"
    counter = screen.getByText('3/7');
    expect(counter).toBeTruthy();
    // When I move backward
    moveBackward();
    // Then I should see "2/7"
    counter = screen.getByText('2/7');
    expect(counter).toBeTruthy();
  })

})