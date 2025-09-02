export type CheckResult = {
  verdict: 'Safe' | 'Suspicious' | 'Fraudulent'
  reason: string
}

const suspiciousPatterns = [/login/i, /bank/i, /verify/i, /otp/i]

export async function mockCheck(input: string): Promise<CheckResult> {
  await new Promise((r) => setTimeout(r, 700))
  const urlLike = /https?:\/\//i.test(input)
  const hasPattern = suspiciousPatterns.some((r) => r.test(input))
  if (urlLike && hasPattern) return { verdict: 'Fraudulent', reason: 'Contains banking keywords and looks like phishing' }
  if (hasPattern) return { verdict: 'Suspicious', reason: 'Suspicious keywords detected' }
  return { verdict: 'Safe', reason: 'No red flags found in quick check' }
}

export const verifiedBankDomains = [
  'standardbank.co.za',
  'absa.co.za',
  'fnb.co.za',
  'nedbank.co.za',
  'capitecbank.co.za',
]

export function looksLikeBankImpersonation(hostname: string): string | null {
  const match = verifiedBankDomains.find((d) => hostname.endsWith(d))
  if (match) return null
  const cues = ['std-bank', 'secure-absa', 'fnb-support', 'nedbannk', 'capitec-secure']
  if (cues.some((c) => hostname.includes(c))) {
    return 'Pretends to be a bank but is not official.'
  }
  return null
}

