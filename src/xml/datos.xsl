<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <body bgcolor="#EEE635">
        <h1>Pagina de administracion de AR-HUB</h1>
        <table>
          <tr>

            <td>
              <h2>Usuarios</h2>
              <table border="5">
                <tr bgcolor="#9acd32">
                  <th style="padding: 10px">Nombre</th>
                  <th style="padding: 10px">Email</th>
                  <th style="padding: 10px">Foto</th>
                </tr>
                <xsl:for-each select="AR-HUB/user">
                  <tr>
                    <td bgcolor="#FFFFFF">
                      <xsl:value-of select="name" />
                    </td>
                    <td bgcolor="#FFFFFF">
                      <xsl:value-of select="email" />
                    </td>
                    <td bgcolor="#FFFFFF">
                      <img>
                        <xsl:value-of select="picture" />
                      </img>
                    </td>
                  </tr>
                </xsl:for-each>
              </table>
            </td>

            <td>
              <h2>Marcadores y modelos</h2>
              <table border="5">
                <tr bgcolor="#9abd45">
                  <th style="padding: 10px">Marker</th>
                  <th style="padding: 10px">Creador</th>
                  <th style="padding: 10px">Modelo</th>
                </tr>
                <xsl:for-each select="AR-HUB/object">
                  <tr>
                    <td bgcolor="#FFFFFF">
                      <xsl:value-of select="tridimensional/marker" />
                    </td>
                    <td bgcolor="#FFFFFF">
                      <xsl:value-of select="tridimensional/creator" />
                    </td>
                    <td bgcolor="#FFFFFF">
                      <xsl:value-of select="marker/image" />
                    </td>
                  </tr>
                </xsl:for-each>
              </table>
            </td>

          </tr>
        </table>
        <br></br>
        <form action="../models_and_markers.html" method="get" target="_blank">
          <button type="submit" style="padding: 10px">Exit</button>
        </form>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>