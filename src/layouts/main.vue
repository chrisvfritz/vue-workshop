<template>
  <slot></slot>

  <footer>
    <p>
      <i>©</i>
      <a href="https://twitter.com/chrisvfritz" target="_blank">
        Chris Fritz
      </a>
    </p>
  </footer>
</template>

<style lang="scss">
  @import '../design';

  // -------
  // CONTENT
  // -------

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Merriweather';
    font-weight: 300;
    color: $body-font-color;
    overflow-x: hidden;
  }

  body, i.fa {
    line-height: 1.7;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Lato';
    line-height: 1.3;
  }

  h1, h2 {
    margin-top: 0;
  }

  h4 {
    text-transform: uppercase;
  }

  a {
    color: $body-link-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &[name] {
      color: $body-font-color;
      position: relative;

      &:hover:before {
        content: '#';
        position: absolute;
        left: -0.8em;
      }
    }
  }

  hr {
    width: 30%;
    border: none;
    border-top: 5px solid #555;
    border-radius: 5px;
    margin: 40px auto;
  }

  section {
    max-width: 800px;
    padding: $content-vertical-padding $content-horizontal-padding;
    margin: $content-horizontal-padding auto 0 auto;

    &:first-of-type {
      margin-top: 0;
    }
  }

  // ------
  // HEADER
  // ------

  header {
    text-align: center;

    img {
      width: 100px;
      height: 100px
    }
  }

  // ------
  // FOOTER
  // ------

  footer {
    text-align: center;
    margin-top: $content-horizontal-padding;

    i { text-align: middle; }
  }

  // -----------
  // CODE BLOCKS
  // -----------

  code {
    font-family: 'PT Mono';
  }

  pre {
    background-color: $code-block-background-color;
    overflow-y: hidden;
    position: relative;

    &:before, &:after {
      content: '';
      width: $code-block-padding;
      height: 100%;
      position: absolute;
      top: 0;
      z-index: 1;
    }

    &:before {
      left: 0;
      background-image: linear-gradient(to left, transparent, $code-block-background-color);
    }

    &:after {
      right: 0;
      background-image: linear-gradient(to right, transparent, $code-block-background-color);
    }

    code {
      display: block;
      padding: $code-block-padding;

      &:after {
        content: 'click to open';
        position: absolute;
        top: 0;
        right: 0;
        padding: $code-block-padding / 3 $code-block-padding / 2;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 2;
      }
    }

    a:hover {
      text-decoration: none;

      code:after {
        opacity: 1;
      }
    }
  }

  .xml, .html {
    .css, .javascript {
      opacity: 1;
    }
  }

  .hljs {
    background: transparent;
    color: #6E819E;
    padding: $code-block-padding;
  }

  .hljs-comment {
    color: #888;
  }
</style>
