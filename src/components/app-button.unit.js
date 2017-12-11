import AppButton from './app-button'

describe('@components/app-button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>'
    const { element } = shallow(AppButton, {
      slots: {
        default: slotContent,
      },
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
