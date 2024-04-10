export const useSignatureStore = defineStore('signature', () => {
    const email = ref('deep@gmail.com')
    const name = ref('deep')
    const jobTitle = ref('software developer')
    const primaryColor = ref('#00f00f')

    return { email, name, jobTitle, primaryColor }
})