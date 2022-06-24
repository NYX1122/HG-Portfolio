import React, { useRef, useEffect, useState } from 'react';

import FormModal from '../components/FormModal';

import { Box, Typography, TextField, Button } from '@mui/material';

import { motion, useCycle } from 'framer-motion';

import { useScrollBlock } from '../customHooks/useScrollBlock';

export default function ContactMe({ scrollToContact, setScrollToContact }) {
  //Map data
  const textFieldData = ['Full Name', 'Email', 'Phone', 'Message'];

  //Autoscroll effect
  const ref = useRef(null);
  useEffect(() => {
    if (scrollToContact) {
      const { top } = ref.current.getBoundingClientRect();
      window.scrollBy({ top: top, left: 0, behavior: 'smooth' });
      setScrollToContact(false);
    }
  }, [scrollToContact, setScrollToContact]);

  //Animation Variables
  const variants = {
    inputAnim: {
      scaleX: 1,
      transition: {
        delay: 0.15,
      },
    },
    buttonStart: { scaleX: 0 },
    inputStart: { scaleX: 0, opacity: 0.8 },
    focus: { opacity: 1 },
    unfocus: { opacity: 0.8 },

    ready: {
      opacity: 1,
    },
    notReady: { opacity: 0.5 },
  };

  //states used to control text field focus because MUI is TERRIBLE
  const [focusOne, setFocusOne] = useState('unfocus');
  const [focusTwo, setFocusTwo] = useState('unfocus');
  const [focusThree, setFocusThree] = useState('unfocus');
  const [focusFour, setFocusFour] = useState('unfocus');

  //states, listenders, and effects used to control button disabling
  const [buttonReady, setButtonReady] = useState('notReady', 'ready');
  const [disabled, setDisabled] = useState(true);

  const [eventArray, setEventArray] = useState([]);

  const handleChange = (event) => {
    const placeholder = event.target.placeholder;
    const value = event.target.value;
    if (eventArray.includes(placeholder)) {
      if (!value) {
        const filteredArray = eventArray.filter((item) => item !== placeholder);
        setEventArray(filteredArray);
      }
    } else {
      setEventArray([...eventArray, placeholder]);
    }
  };

  useEffect(() => {
    if (eventArray.length === 4) {
      setButtonReady('ready');
      setDisabled(false);
    } else {
      setButtonReady('notReady');
      setDisabled(true);
    }
    if (eventArray.includes('Full Name')) {
      setFocusOne('focus');
    } else {
      setFocusOne('unfocus');
    }
    if (eventArray.includes('Email')) {
      setFocusTwo('focus');
    } else {
      setFocusTwo('unfocus');
    }
    if (eventArray.includes('Phone')) {
      setFocusThree('focus');
    } else {
      setFocusThree('unfocus');
    }
    if (eventArray.includes('Message')) {
      setFocusFour('focus');
    } else {
      setFocusFour('unfocus');
    }
  }, [eventArray]);

  //listener used to handle submit
  const [modal, toggleModal] = useCycle('close', 'open');
  const [errorType, setErrorType] = useState('');
  const [blockScroll, allowScroll] = useScrollBlock();

  const onSubmit = async (event) => {
    event.preventDefault();

    blockScroll();

    const inquirerName = event.target[0].value.trim();
    const inquirerEmail = event.target[2].value.trim();
    const inquirerPhone = event.target[4].value.trim();
    const inquirerMessage = event.target[6].value.trim();

    const nameValidate = await /^([a-zA-Z]+)\s([a-zA-Z]+)$/.test(inquirerName);
    const emailValidate =
      await /^([a-zA-Z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/.test(inquirerEmail);
    const phoneValidate = await /^(\([\d]{3}\))\s([\d]{3})-([\d]{4})$/.test(
      inquirerPhone
    );

    console.log(nameValidate, emailValidate, phoneValidate);

    if (nameValidate && emailValidate && phoneValidate) {
      const templateParams = {
        from_name: inquirerName,
        user_email: inquirerEmail,
        phone_number: inquirerPhone,
        message: inquirerMessage,
      };

      const stringyTemplateParams = new URLSearchParams(
        templateParams
      ).toString();

      const url = `/.netlify/functions/ContactFormEmail?${stringyTemplateParams}`;
      const formSubmission = await fetch(url).then((response) => response);
      if (formSubmission.status === 200) {
        console.log('SUCCESS!', formSubmission);
        event.target[0].value = '';
        event.target[2].value = '';
        event.target[4].value = '';
        event.target[6].value = '';
        toggleModal('open');
        setErrorType('');
      } else {
        console.log('FAILED...', formSubmission);
        toggleModal('open');
        setErrorType('connection');
      }
    } else if (!nameValidate) {
      toggleModal('open');
      setErrorType('validationName');
    } else if (!emailValidate) {
      toggleModal('open');
      setErrorType('validationEmail');
    } else if (!phoneValidate) {
      toggleModal('open');
      setErrorType('validationPhone');
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rose.main',
        pt: '70px',
        pb: '10px',
        backgroundImage: { xs: 'none', sm: 'url(/art/bee_flowers.png)' },
        backgroundSize: { sm: '100%' },
        backgroundPosition: { sm: '50% 65%' },
        backgroundRepeat: 'no-repeat',
      }}
      ref={ref}
    >
      <Typography
        component={motion.p}
        sx={{
          fontSize: { xs: '30px', sm: '34px' },
          color: 'malachite.main',
          fontWeight: 'light',
          textShadow: '0 4px 4px #00000025',
          textAlign: 'center',
          mb: { xs: '15px', sm: '50px' },
        }}
        viewport={{ once: false, margin: '2000px 0px 0px 0px' }}
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Contact Me
      </Typography>
      <Box
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={onSubmit}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        {textFieldData.map((item, index) => (
          <TextField
            component={motion.div}
            key={index}
            placeholder={item}
            multiline
            variant='standard'
            InputProps={{
              disableUnderline: true,
              sx: {
                fontSize: { xs: '25px', sm: '29px' },
                color: 'malachite.main',
              },
            }}
            minRows={index === 3 ? 8 : 0}
            sx={{
              backgroundColor: 'white',
              borderRadius: '50px',
              boxShadow: '0 4px 4px #00000025',
              px: '20px',
              width: { xs: '80vw', sm: '55vw' },
              my: '15px',
            }}
            animate={
              index === 0
                ? focusOne
                : index === 1
                ? focusTwo
                : index === 2
                ? focusThree
                : focusFour
            }
            initial='inputStart'
            whileInView='inputAnim'
            variants={variants}
            onChange={handleChange}
          ></TextField>
        ))}
        <Button
          component={motion.button}
          sx={{
            px: '8px',
            height: '30px',
            backgroundColor: 'malachite.main',
            '&:hover': {
              color: 'malachite.main',
            },
            borderRadius: '24px',
            fontSize: { xs: '25px', sm: '29px' },
            color: 'rose.main',
            fontWeight: 'regular',
            variant: 'contained',
            width: { xs: '85vw', sm: '60vw' },
            my: '15px',
            py: '20px',
          }}
          initial='buttonStart'
          whileInView='inputAnim'
          animate={buttonReady}
          variants={variants}
          disabled={disabled}
          type='submit'
        >
          SUBMIT
        </Button>
      </Box>
      <FormModal
        modal={modal}
        toggleModal={toggleModal}
        errorType={errorType}
        allowScroll={allowScroll}
      ></FormModal>
    </Box>
  );
}
