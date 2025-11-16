import React, { useState } from 'react';
import './components.css';

const articles = [
  {
    id: 1,
    title: 'Memo 1: 10 phrases after which you should immediately hang up the phone ',
    content: `<h1>Typical fraudulent phrases and schemes on the phone</h1>
<p>The following are common phrases used by telephone scammers. Be vigilant and don't fall for tricks!</p>

    <ul>
        <li><strong>"Switching you to an employee..."</strong> is a standard ploy to transfer a conversation to another scammer.</li>
        <li><strong>"Financing a banned organization"</strong> is an attempt to intimidate and force people to act under pressure.</li>
        <li><strong>"I'm calling about remote work"</strong> is often used to lure money under the guise of employment.</li>
        <li><strong>"This is the courier delivery department, a registered letter has been received in your name"</strong> — an attempt to find out personal information.</li>
        <li><strong>"Unaccounted funds have been found in your bank accounts"</strong> is an excuse to request SMS codes.</li>
        <li><strong>"It is necessary to declare funds and valuables"</strong> is a fraudulent scheme using the theme of taxes.</li>
        <li><strong>"Your account on Gosuslugi has been hacked"</strong> — an attempt to gain access to personal data.</li>
        <li><strong>"The director/supervisor is worried about the current audit"</strong> — pressure on behalf of the authorities.</li>
        <li><strong>"Is that you in the photo?" is a suspicious, irrelevant question.</li>
        <li><strong>"Pay the debt/fine"</strong> — demand immediate payment under threat of consequences.</li>
    </ul>`
  },
  {
    id: 2,
    title: 'Memo 2: How to check if the call is really from the bank',
    content: ` 

    <h2>1. Check the phone number</h2>
<ul>
        <li>Banks use <strong>official short numbers</strong> (for example, 900 for Sberbank, 1000 for VTB).</li>
        <li>They can also make calls from <strong>federal numbers with the code 8-800</strong>.</li>
        <li>Starting from September 1, 2025, banks are required to provide <strong>the name of the organization</strong> when making a call. If it is not displayed, it is a sign of fraud.</li>
    </ul>

    <div class="tip">
        <p><strong>The Council:</strong> Add your bank's official numbers to your phone contacts. This way you will immediately see that the call is indeed from the bank.</p>
    </div>

    <h2>2. Check the information in the bank</h2>
<ul>
        <li>Reset the call and <strong>call back yourself</strong> using the official number of the bank — it is specified:</li>
        <ul>
            <li>on the back of the bank card;</li>
            <li>on the bank's official website;</li>
            <li>in the bank's mobile application.</li>
        </ul>
        <li>Ask the operator if there has been a call from the support service to your number.</li>
    </ul>

    <div class="warning">
        <p><strong>Important!</strong> Do not call back the number you were called from, even if it looks like an official number. Fraudsters can substitute numbers.</p>
    </div>

    <h2>3. Pay attention to the behavior of the interlocutor</h2>
<p>Signs that scammers are calling:</p>
    <ul>
        <li><strong>They rush and push:They demand that you make a decision immediately, and they don't give you time to think.</li>
        <li><strong>They threaten:</strong> they talk about account blocking, fines, and criminal liability.</li>
        <li><strong>They ask you to transfer money:</strong> they offer a "secure account" or other transfer schemes.</li>
        <li><strong>Confidential data is requested:</strong> SMS codes, PIN codes, CVV codes, application passwords.</li>
        <li><strong>They avoid clear explanations:</strong> they cannot clearly name the purpose of the call or avoid asking questions.</li>
    </ul>

    <p>Signs of a call from a real bank employee:</p>
    <ul>
        <li><strong>Calm tone:</strong> the representative of the bank speaks politely and does not rush.</li>
        <li><strong>Clear purpose:</strong> explains why he is calling (for example, clarifying an operation, offering a service).</li>
        <li><strong>Does not ask for confidential data:</strong> never asks for PIN codes, CVV codes or SMS codes.</li>
        <li><strong>Introduces himself:</strong> gives his name, position and the name of the bank.</li>
        <li><strong>Offers alternative communication methods:</strong> may suggest contacting the branch or writing to the support chat.</li>
    </ul>

    <div class="tip">
        <p><strong>What to do if in doubt:</strong></p>
        <ol>
            <li>End the conversation.</li>
            <li>Call the bank yourself using the official number.</li>
            <li>Inform the operator about a suspicious call. This will help prevent fraud.</li>
        </ol>
    </div>`
  },
  {
    id: 3,
    title: 'Memo 3: What to answer to scammers: ready-made phrases',
    content: `

    <div class="phrases">
        <p class="phrase">"I'll call the bank back at the official number from the website," and hang up right away.</p>
        <p class="phrase">"I never share codes, passwords, or card details over the phone. Nobody."</p>
        <p class="phrase">"If you are from an official agency, please send a notification by mail. I'll figure it out."</p>
        <p class="phrase">"I need to consult with the children. I'll call you back," which will give you time to think.</p>
    </div>

    <div class="advice">
        <h2>Additional recommendations</h2>
<ul>
            <li><strong>Don't get into long arguments.</strong> Your goal is to end the conversation safely.</li>
            <li><strong>Don't make excuses.</strong> A clear phrase without explanation is more effective.</li>
            <li><strong>Do not succumb to pressure.</strong> If you are being rushed or threatened, this is a sure sign of fraud.</li>
            <li><strong>Write down the details of the conversation:</strong> phone number, time, name of the interlocutor (if identified), the essence of the "problem". This is useful when contacting a bank or the police.</li>
            <li><strong>Block the number</strong> after a suspicious call.</li>
        </ul>
    </div>

    <div class="advice">
        <h2>What else can I say (about the situation)</h2>
        <ul>
            <li>"I have already informed the bank's security service about your call."</li>
            <li>"I don't have any accounts in your bank. Check the data."</li>
            <li>"I don't make financial decisions over the phone. Come to the department."</li>
            <li>"I need to check the information. I'll contact the bank myself."</li>
            <li>"I'm recording a conversation. All data will be transferred to law enforcement agencies."</li>
        </ul>
    </div>

    <div class="advice" style="background-color: #fff3e0; border-left-color: #ff9800;">
        <h2>It is important to remember</h2>
<p>The real employees of the bank are:</p>
        <ul>
            <li>they never ask for SMS codes;</li>
            <li>they do not require you to transfer money immediately;</li>
            <li>they do not threaten to block accounts or criminalize liability;</li>
            <li>they don't ask you to install third-party applications.</li>
            <li>they speak calmly and provide official contacts for communication.</li>
        </ul>
        <p><strong>If in doubt, stop the conversation and call the bank back using the number from the card or website.</strong></p>
    </div>`
  },
  {
    id: 4,
    title: `Infographic Don't say those phrases`,
    content: `<h1>Infographic "Don't say those phrases!"</h1>

    <div class="infographic">
        <table>
            <thead>
                <tr>
                    <th>Phrase</th>
<th>Why can't you talk</th>
</tr>
            </thead>
            <tbody>
                <tr>
                    <td class="warning">"Yes" or "Confirm"</td>
                    <td class="explanation">They can be used for biometrics (voice recording) in order to confirm transactions without your knowledge.</td>
                </tr>
                <tr>
                    <td class="warning">Card number or CVV code</td>
                    <td class="explanation">They give you direct access to your funds. No official employee will request this information over the phone.</td>
                </tr>
                <tr>
                    <td class="warning">Codes from SMS</td>
                    <td class="explanation">They allow you to hack your account, confirm the transfer of funds, or change your password. Never refer to them as an outsider.</td>
                </tr>
                <tr>
                    <td class="warning">Personal data (passport, SNILS)</td>
                    <td class="explanation">are used to apply for loans, register one-day firms, and other fraudulent schemes.</td>
                </tr>
                <tr>
                    <td class="warning">"I will transfer the money"</td>
                    <td class="explanation">Is a sign of consent to action. Scammers can write down the phrase and use it as "proof" of your intention.</td>
                </tr>
            </tbody>
        </table>
    </div>

    <footer>
        <p>Remember: real employees of banks and government agencies never request such data over the phone.<br>
        If fraud is suspected, stop the conversation immediately and contact the organization through official channels.</p>
    </footer>`
  },
  
];

const ModalArticle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);

  const openModal = (articleId) => {
    const article = articles.find(a => a.id === articleId);
    setCurrentArticle(article);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentArticle(null);
  };

  const printArticle = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${currentArticle.title}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; text-align: left; }
            h1 { color: #333; }
            @page { margin: 20mm; }
          </style>
        </head>
        <body>
          <h1>${currentArticle.title}</h1>
          ${currentArticle.content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="modal-container">
      {/* Список кнопок для открытия статей */}
      <div className="articles-grid">
        {articles.map(article => (
          <button
            key={article.id}
            className="article-btn"
            onClick={() => openModal(article.id)}
          >
            {article.title}
          </button>
        ))}
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h2>{currentArticle.title}</h2>
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: currentArticle.content }}
            />
            <button className="print-btn" onClick={printArticle}>
              Print it out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalArticle;
