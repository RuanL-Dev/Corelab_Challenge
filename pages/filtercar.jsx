import { useState } from 'react'
import styled from 'styled-components'
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'

import { filterSchema } from '../modules/user/filter.schema'

import Body from '../src/components/layout/body/Body'
import ContainerPage from '../src/components/layout/container/ContainerPage'
import Input from '../src/components/input/Input'
import ButtonSave from '../src/components/button/ButtonSave'
import IconImages from '../src/components/iconImage/IconImages'

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.secondBackgroundColor};
  padding: 150px;
  margin-bottom: 10vh;
`

const StyledArrow = styled.div`
  margin: 50px 750px 0px 0px;
  cursor: pointer;
`

const SavingButtonContainer = styled.div`
  padding-left: 240px;
  margin-top: 50px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const PriceForm = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

export default function FilterCar() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(filterSchema)
  })

  const handleForm = (data) => {
    console.log(data)
  }
  console.log(errors)
  return (
    <>
      <Body>
        <ContainerPage>
          <StyledArrow>
            <IconImages imageName="ArrowIcon" type="svg" />
          </StyledArrow>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input label="Marca" name="carBrand" {...register('carBrand')} />
              <Input label="Cor" name="carColour" {...register('carColour')} />
              <Input label="Ano" placeholder="(YYYY)" name="carYear" {...register('carYear')} />
              <PriceForm>
                <Input
                  label="Preço mín."
                  placeholder="(R$)"
                  name="LowestPrice"
                  {...register('LowestPrice')}
                />
                <Input
                  label="Preço máx."
                  placeholder="(R$)"
                  name="HighestPrice"
                  {...register('HighestPrice')}
                />
              </PriceForm>
              <SavingButtonContainer>
                <ButtonSave type="submit">SALVAR</ButtonSave>
              </SavingButtonContainer>
            </Form>
          </FormContainer>
        </ContainerPage>
      </Body>
    </>
  )
}
