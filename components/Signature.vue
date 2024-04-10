<script setup>
import {useSignatureStore} from '@/stores/signature-store'
const store = useSignatureStore();

const {email, name, jobTitle, primaryColor} = storeToRefs(store)

const logoHeight = 200
const logoWidth = 200
const logoUrl = 'https://themeselection-cdn.b-cdn.net/wp-content/uploads/thegem-logos/logo_9967efe1494f3b71ddd69a3e7852b921_1x.png'

const separatorHeight = 64
const fontFamily= 'Roboto, sans-serif'

const nameStyle = computed(() => {
    return {
        'font-family' : fontFamily, 
        'font-weight': 700, 
        'font-size': '16px', 
        'line-height': '19px', 
        'color': primaryColor.value, 
        'whitespace': 'nowrap', 
        'padding': '0px 0px 4px 0px'
    }
})
</script>

<template>
<div>
    <h1 class="text-center text-2xl">Your Email Signature</h1>
    <div class="preview">
    {{ primaryColor }}
    <table cellspacing="0" cellpadding="0" border="0">
      <tr>
        <td :width="logoWidth" :style="{'vertical-align': 'middle'}">
          <img :src="logoUrl" :width="logoWidth" :height="logoHeight" :style="{'display': 'block', 'image-rendering': '-webkit-optimize-contrast'}" />
        </td>
        <td width="49">
          <table cellspacing="0" cellpadding="0" border="0" :style="{'margin':'1.5px 0px'}">
            <tr>
              <td width="24" :height="separatorHeight" :style="{'width': '24px'}">&nbsp;</td>
              <td width="1" :height="separatorHeight" :style="{'border-left': '1px solid #d1dbe5'}"></td>
              <td width="24" :height="separatorHeight" :style="{'width': '24px'}">&nbsp;</td>
            </tr>
          </table>
        </td>
        <td>
          <table cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td :style="nameStyle">{{ name }}</td>
            </tr>
            <tr>
              <td :style="emailStyle">{{ email }}</td>
            </tr>
            <tr v-if="jobTitle">
              <td :style="jobTitleStyle">{{ jobTitle }}</td>
            </tr>
            <tr v-if="office || mobile">
              <td :style="{'padding': '0px 0px 4px 0px', 'font-size': fontSizeSmall, 'line-height': lineHeightSmall}">
                <table cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td v-if="office" :style="{'padding': '0px 10px 0px 0px', 'font-family' : fontFamily, 'font-weight': 500, 'font-size': fontSizeSmall, 'line-height': lineHeightSmall, 'color': primaryColor, 'whitespace': 'nowrap'}">
                      <strong>P:</strong> {{ office }}
                    </td>
                    <td v-if="mobile" :style="{'padding': '0px', 'font-family' : fontFamily, 'font-weight': 500, 'font-size': fontSizeSmall, 'line-height': lineHeightSmall, 'color': primaryColor, 'whitespace': 'nowrap'}">
                      <strong>M:</strong> {{ mobile }}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td :style="{'padding': '0px', 'font-size': fontSizeSmall, 'line-height': lineHeightSmall}">
                <a :href="companyUrl" :style="{'font-family' : fontFamily, 'font-weight': 700, 'color': '#4393CF', 'text-decoration': 'none'}">{{ companyUrlReadable }}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</div>    
</template>

