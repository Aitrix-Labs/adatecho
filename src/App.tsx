import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import {
  BlogPage,
  CompanyPage,
  ContactPage,
  CustomersPage,
  IndustryPage,
  LegalPage,
  PlatformPage,
  ResourcesPage,
  TrustPage,
} from './pages/SitePages'

export default function App() {
  return (
    <BrowserRouter basename="/adatecho">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="platform" element={<PlatformPage />} />
          <Route path="industries/:slug" element={<IndustryPage />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="company" element={<CompanyPage />} />
          <Route path="company/careers" element={<CompanyPage kind="careers" />} />
          <Route path="trust" element={<TrustPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="terms" element={<LegalPage kind="terms" />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
