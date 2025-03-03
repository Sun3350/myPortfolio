import React, { useState } from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  // State for modal view:
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  // When an image is clicked, open the modal with the selected image.
  const handleImageClick = (image) => {
    setModalImage(image)
    setModalOpen(true)
  }

  // Close the modal (and reset the image)
  const closeModal = () => {
    setModalOpen(false)
    setModalImage(null)
  }

  return (
    <>
      <section className="embla">
        <div className="embla__viewport py-5" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img 
                  src={image} 
                  alt={`Slide ${index}`} 
                  className="embla__slide__number rounded-lg" 
                  onClick={() => handleImageClick(image)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged & zoomable image */}
      {modalOpen && (
        <div 
          className="modal-overlay" 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content.
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
            }}
          >

            <TransformWrapper
              initialScale={1}
              wheel={{ step: 0.2 }}
              pinch={{ step: 5 }}
              doubleClick={{ disabled: true }}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                  <TransformComponent>
                    <img 
                      src={modalImage} 
                      alt="Enlarged view" 
                      style={{ width: '100%', height: 'auto', display: 'block' }} 
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
             <div className=' absolute top-10 right-10 rounded-[50%] bg-white flex justify-center items-center text-black py-1  px-3 cursor-pointer'>X</div>

        </div>
      )}
    </>
  )
}

export default EmblaCarousel
