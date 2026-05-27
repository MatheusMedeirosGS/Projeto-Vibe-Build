const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  try {
    // Read the markdown file
    const mdFile = path.join(__dirname, '../PITCH_APRESENTACAO_5MIN.md');
    const mdContent = fs.readFileSync(mdFile, 'utf8');

    // Convert markdown to HTML
    const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StockSync - Pitch de Apresentação</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #3d2817;
            background: #f5f3f0;
        }

        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
        }

        h1 {
            color: #8B6F47;
            font-size: 2.2em;
            margin-bottom: 10px;
            border-bottom: 3px solid #8B6F47;
            padding-bottom: 15px;
            margin-top: 30px;
        }

        h2 {
            color: #8B6F47;
            font-size: 1.6em;
            margin-top: 25px;
            margin-bottom: 12px;
        }

        h3 {
            color: #6B5437;
            font-size: 1.2em;
            margin-top: 15px;
            margin-bottom: 10px;
        }

        p {
            margin-bottom: 12px;
            line-height: 1.5;
        }

        ul, ol {
            margin-left: 20px;
            margin-bottom: 12px;
        }

        li {
            margin-bottom: 6px;
        }

        code {
            background: #f5f3f0;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            color: #C9634F;
        }

        pre {
            background: #3d2817;
            color: #f5f3f0;
            padding: 12px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 12px;
            font-size: 0.9em;
            font-family: 'Courier New', monospace;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
            font-size: 0.95em;
        }

        table th, table td {
            border: 1px solid #E8DCC8;
            padding: 8px;
            text-align: left;
        }

        table th {
            background: #8B6F47;
            color: white;
            font-weight: bold;
        }

        table tr:nth-child(even) {
            background: #f5f3f0;
        }

        hr {
            border: none;
            border-top: 2px solid #E8DCC8;
            margin: 25px 0;
        }

        strong {
            color: #8B6F47;
            font-weight: bold;
        }

        em {
            font-style: italic;
            color: #6B5437;
        }

        .page-break {
            page-break-after: always;
        }

        @page {
            margin: 1cm;
            @bottom-center {
                content: counter(page) " / " counter(pages);
                font-size: 10px;
                color: #8B6F47;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎯 PITCH STOCKSYNC - 5 MINUTOS</h1>
        ${mdContent
            .replace(/^# /gm, '<h1>')
            .replace(/^## /gm, '<h2>')
            .replace(/^### /gm, '<h3>')
            .replace(/<h1>🎯 PITCH STOCKSYNC - 5 MINUTOS<\/h1>/g, '')
            .split('\n').map(line => {
                if (line.startsWith('---')) return '';
                if (line === '') return '';
                return line;
            }).join('\n')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/\`(.+?)\`/g, '<code>$1</code>')
            .replace(/\n\n+/g, '</p><p>')
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/(<li>.+?<\/li>)/s, (match) => '<ul>' + match + '</ul>')
            .split('<hr>').join('<hr>')
        }
    </div>
</body>
</html>
    `;

    // Launch browser
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

    // Output path
    const outputPath = path.join(__dirname, '../PITCH_APRESENTACAO_5MIN.pdf');

    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: {
        top: '1cm',
        right: '1cm',
        bottom: '1.5cm',
        left: '1cm'
      },
      printBackground: true,
      scale: 1
    });

    await browser.close();

    console.log('✅ PDF gerado com sucesso!');
    console.log(`📄 Arquivo: ${outputPath}`);
    console.log(`✨ Pronto para apresentação!`);

  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    process.exit(1);
  }
}

generatePDF();
